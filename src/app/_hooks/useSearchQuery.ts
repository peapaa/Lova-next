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
    // searchParams.set("page", "1");
    router.push("?page=1");
  }

  const handleNextPage = () => {
    // searchParams.set("page", `${page + 1}`);
    router.push(
      `?page=${page + 1}&search=${searchText}&category=${searchCategory}`
    );
  };

  const handlePrevPage = () => {
    if (page > 0) {
      //   searchParams.set("page", `${page - 1}`);
      router.push(
        `?page=${page - 1}&search=${searchText}&category=${searchCategory}`
      );
    }
  };

  const handleKeyDown = (searchText: string) => {
    if (searchText.trim() === "") {
      //   searchParams.delete("search");
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");
      router.push(`?${params.toString()}`);
    } else {
      //   searchParams.set("search", searchText.trim());
      //   searchParams.set("page", "1");
      router.push(`?search=${searchText.trim()}&page=1`);
    }
  };

  const handleKeyDownInputCategory = (searchCategory: string) => {
    if (searchCategory.trim() === "") {
      //   searchParams.delete("category");
      const params = new URLSearchParams(searchParams.toString());
      params.delete("category");
      router.push(`?${params.toString()}`);
    } else {
      //   searchParams.set("category", searchCategory.trim());
      //   searchParams.set("page", "1");
      router.push(`?category=${searchCategory.trim()}&page=1`);
    }
  };

  const handleResetSearch = () => {
    router.push(`${pathname}`);
  };
  return {
    searchText,
    searchCategory,
    handleKeyDown,
    handleKeyDownInputCategory,
    handleNextPage,
    handlePrevPage,
    page,
    handleResetSearch,
  };
};

export default useSearchQuery;
