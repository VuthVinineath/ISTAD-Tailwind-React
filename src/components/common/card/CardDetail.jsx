import React from "react";
import { Card } from "flowbite-react";

export default function CardDetail({ title, description, image }) {
  return (
    <div>
      <Card className="flex justify-center max-w-sm mx-auto">
        <div>
          <img
            className="h-64"
            src={
              image ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
            alt="image"
          />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title || "UnTitle"}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description || "No Description"}
        </p>
      </Card>
    </div>
  );
}
