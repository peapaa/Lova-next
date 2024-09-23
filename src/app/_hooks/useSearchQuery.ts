import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const useSearchQuery = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchText, setSearchText] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("");

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    setSearchText(searchQuery);
    const searchCategoryQuery = searchParams.get("category") || "";
    setSearchCategory(searchCategoryQuery);
    console.log("searchQuery", searchQuery);
  }, [searchParams]);

  let page = parseInt(searchParams.get("page") || "1", 10);

  if (isNaN(page)) {
    page = 1;
  }

  if (page < 1) {
    page = 1;
    router.push("?page=1");
  }

  const handleNextPage = () => {
    const params = new URLSearchParams();
    params.set("page", (page + 1).toString());
    if (searchText) {
      params.set("search", searchText);
    }
    if (searchCategory) {
      params.set("category", searchCategory);
    }
    router.push(`?${params.toString()}`);
  };

  const handlePrevPage = () => {
    if (page > 0) {
      const params = new URLSearchParams();
      params.set("page", (page - 1).toString());
      if (searchText) {
        params.set("search", searchText);
      }
      if (searchCategory) {
        params.set("category", searchCategory);
      }
      router.push(`?${params.toString()}`);
    }
  };

  const handleSearch = (searchText?: string, searchCategory?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchText !== undefined) {
      if (searchText.trim() === "") {
        params.delete("search");
      } else {
        params.set("search", searchText);
      }
    }

    if (searchCategory !== undefined) {
      if (searchCategory.trim() === "") {
        params.delete("category");
      } else {
        params.set("category", searchCategory);
      }
    }

    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const handleResetSearch = () => {
    router.push(`${pathname}`);
  };
  return {
    searchText,
    searchCategory,
    handleSearch,
    handleNextPage,
    handlePrevPage,
    page,
    handleResetSearch,
  };
};

export default useSearchQuery;
