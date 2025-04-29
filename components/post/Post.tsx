import { GetAllPostsQueryResult } from "@/sanity.types";
import React from "react";

interface PostProps {
  post: GetAllPostsQueryResult[number];
  userId: string | null;
}

function Post({ post, userId }: PostProps) {
  return <div>Post</div>;
}

export default Post;
