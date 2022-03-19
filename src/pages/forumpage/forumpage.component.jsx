import React from "react";

import "./forumpage.styles.scss";
import SideNavigation from "../../components/side-navigation/side-navigation.component";
import DiscussionForum from "../../components/discussion-form/discussion-forum.component";

const Forumpage = ({ pathname }) => {
  return (
    <div className="forumpage-container">
      <SideNavigation pathname={pathname} />
      <DiscussionForum />
    </div>
  );
};

export default Forumpage;
