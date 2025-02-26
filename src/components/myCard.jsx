"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const MyCard = ({ apiUrl, limit = 10 }) => {
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging: Check the fetched data
        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }
        setCardData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, [apiUrl]);

  // Handle invalid data (not an array)
  if (!Array.isArray(cardData)) {
    return <p className="text-center text-red-500">Invalid data format</p>;
  }

  // Slice the data based on the limit
  const displayData = cardData.slice(0, Math.min(limit, cardData.length));

  // Handle empty data
  if (displayData.length === 0) {
    return <p className="text-center text-gray-500">No items available</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {displayData.map(({ id, image, price, title }) => (
        <Card
          key={id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle className="text-gray-600 font-semibold mb-2">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center w-full h-48 object-contain">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-56 rounded-md object-contain"
              />
            ) : (
              <p className="text-gray-400">No image available</p>
            )}
          </CardContent>
          <CardFooter className="text-lg font-bold text-blue-600 text-center">
            ${price ? price.toFixed(2) : "N/A"}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MyCard;
