import React from "react";

interface WorkItemProps {
  imageUrl: string;
  description: string;
  link: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ imageUrl, description, link }) => {
  return (
    <div className="work-item">
      <img src={imageUrl} alt={description} className="work-item__image" />
      <p className="work-item__description">{description}</p>
      <p>{link}</p>
    </div>
  );
};

export default WorkItem;
