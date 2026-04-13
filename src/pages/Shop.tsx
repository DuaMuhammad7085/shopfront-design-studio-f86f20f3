import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import shopBanner from "@/assets/shop-banner.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceFilter, setPriceFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [onSaleFilter, setOnSaleFilter] = useState(false);
  const [inStockFilter, setInStockFilter] = useState(false);
  const [sortBy, setSortBy] = useState("price-low");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(true);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (onSaleFilter) result = result.filter(p => p.originalPrice);
    if (inStockFilter) result = result.filter(p => p.inStock);
    if (ratingFilter) result = result.filter(p => p.rating >= 4.5);

    switch (sortBy) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "popular": result.sort((a, b) => b.reviews - a.reviews); break;
    }
    return result;
  }, [selectedCategory, sortBy, onSaleFilter, inStockFilter, ratingFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[250px] overflow-hidden">
        <img src={shopBanner} alt="Bakeware Essentials" className="w-full h-full object-cover" width={1920} height={512} />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/70 to-chocolate/30 flex items-center justify-center text-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream italic mb-2">Bakeware Essentials</h1>
            <p className="font-body text-cream/80 text-lg mb-4">Everything you need for the perfect bake!</p>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-6 py-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-body whitespace-nowrap py-2 px-1 border-b-2 transition-colors ${
                  selectedCategory === cat
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            {/* Categories list */}
            <div className="bg-card rounded-xl border border-border p-4 mb-4">
              <h3 className="font-heading font-bold text-foreground mb-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm">
                Categories
              </h3>
              <div className="space-y-2 mt-3">
                {["All Products", "Bakeware", "Ingredients", "Decorating Tools", "Accessories"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat === "All Products" ? "All" : cat)}
                    className={`block w-full text-left font-body text-sm py-1 px-2 rounded transition-colors ${
                      (cat === "All Products" ? "All" : cat) === selectedCategory
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-card rounded-xl border border-border p-4 mb-4">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center justify-between w-full font-heading font-bold text-foreground text-sm"
              >
                Filter By <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
              </button>
              {filterOpen && (
                <div className="mt-3 space-y-3">
                  {[
                    { label: "Price", checked: priceFilter, onChange: () => setPriceFilter(!priceFilter) },
                    { label: "Rating (4.5+)", checked: ratingFilter, onChange: () => { setRatingFilter(!ratingFilter); setCurrentPage(1); } },
                    { label: "On Sale", checked: onSaleFilter, onChange: () => { setOnSaleFilter(!onSaleFilter); setCurrentPage(1); } },
                    { label: "In Stock", checked: inStockFilter, onChange: () => { setInStockFilter(!inStockFilter); setCurrentPage(1); } },
                  ].map(f => (
                    <label key={f.label} className="flex items-center gap-2 font-body text-sm text-foreground cursor-pointer">
                      <input type="checkbox" checked={f.checked} onChange={f.onChange} className="rounded border-border" />
                      {f.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Sort */}
            <div className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-heading font-bold text-foreground text-sm mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <p className="font-body text-muted-foreground text-sm mb-4">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} Products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginated.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-border font-body text-sm disabled:opacity-50 hover:bg-secondary transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg font-body text-sm transition-colors ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "border border-border hover:bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-border font-body text-sm disabled:opacity-50 hover:bg-secondary transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Deal */}
      <section className="relative h-[280px] overflow-hidden">
        <img src={featuredDealBg} alt="Featured Deal" className="w-full h-full object-cover" loading="lazy" width={1920} height={512} />
        <div className="absolute inset-0 bg-chocolate/60 flex items-center justify-center text-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-cream italic mb-2">Featured Deal</h2>
            <p className="font-body text-cream/90 text-lg mb-6">Limited Time Offer: 25% Off Bakeware Sets!</p>
            <Link to="/shop?category=Bundles" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2 italic">Join Our Mailing List</h2>
          <p className="font-body text-muted-foreground mb-4">Get the latest recipes & special offers!</p>
          <div className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
