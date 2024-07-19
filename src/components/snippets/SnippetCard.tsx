import React from "react";

const SnippetCard = ({ onClick, itemx }: any) => {
  return (
    <li>
      <div
        onClick={() => onClick(itemx)}
        className="bg-violet-100 p-2 flex items-center gap-3"
      >
        <div className="bg-green-100">L</div>
        <div className="space-y-2">
          <p className="bg-green-100">{itemx.title}</p>
          <p className="bg-green-100">Description</p>
        </div>
        <ul className="flex gap-2">
          {itemx?.tags?.map((tag: any, i: any) => {
            return (
              <li key={i}>
                <small className="bg-orange-100">{tag.content}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default SnippetCard;
