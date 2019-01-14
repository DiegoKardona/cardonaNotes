import React from "react";

import "./RecentPosts.scss";

//Importing PostComponent for every post
import PostComponent from "../PostComponent";

const RecentPosts = () => {
  return (
    <div id="recent-posts">
      <h3>Recent Posts</h3>
      <PostComponent />
    </div>
  );
};

export default RecentPosts;
