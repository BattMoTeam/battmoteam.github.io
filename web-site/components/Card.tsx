import React from "react";

interface CardProps {
  title: string;
  short_description: string;
  description?: React.ReactNode; // changed from string to ReactNode
  imgSrc: string;
}

export default function Card({
  title,
  short_description,
  description,
  imgSrc,
}: CardProps) {
  const isVideo = imgSrc.endsWith(".mp4");

  return (
    <div className="group block bg-card rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
      {/* Media */}
      <div className="flex justify-center py-4">
        {isVideo ? (
          <video className="h-30 w-auto rounded-md" autoPlay loop muted playsInline>
            <source src={imgSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={imgSrc} alt={title} className="h-40 w-auto object-contain rounded-md" />
        )}
      </div>

      {/* Text */}
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{short_description}</p>
        <hr className="mb-4" />
        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}
      </div>
    </div>
  );
}