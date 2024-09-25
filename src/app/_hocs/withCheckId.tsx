import React from "react";

import { WithCheckIdProps } from "../_hocs/type";
import { useParams, usePathname, useRouter } from "next/navigation";
function withCheckId<T extends WithCheckIdProps>(
  Component: React.ComponentType<T>
) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const pathname = usePathname;
    const path = pathname.toString().split("/");
    const basePath = path.slice(0, -2).join("/");
    React.useEffect(() => {
      if (!id) {
        router.push(basePath || "/admin/resources/categories");
      }
    }, [id, basePath, router]);
    return <Component {...props} id={id} />; // check id version 2
  };
}

withCheckId.displayName = "withCheckId";

export default withCheckId;
