import React from "react";

export interface AvatarProps {
  size: number;
}

export const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  return <div>Avatar</div>;
};
