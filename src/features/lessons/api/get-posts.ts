import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Entity } from "@/types/api";
import { queryOptions, useQuery } from "@tanstack/react-query";

type Post = Entity<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;

export const getPosts = ({ page, cookie }: { page?: number; cookie?: string } = { page: 1 }): Promise<Post[]> => {
  return api.get(`https://jsonplaceholder.typicode.com/posts`, {
    params: {
      page
    },
    cookie
  });
};

export const getPostsQueryOptions = ({ page, cookie }: { page?: number; cookie?: string } = {}) => {
  return queryOptions({
    queryKey: page ? ["posts", { page }] : ["posts"],
    queryFn: () => getPosts({ page, cookie })
  });
};

type UsePostsOptions = {
  page?: number;
  queryConfig?: QueryConfig<typeof getPostsQueryOptions>;
};

export const usePosts = ({ queryConfig, page }: UsePostsOptions) => {
  return useQuery({
    ...getPostsQueryOptions({ page }),
    ...queryConfig
  });
};
