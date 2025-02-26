import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RestaurantArticle = ({ header, title, description, imageSrc }) => {
  return (
    <article className="flex flex-col md:flex-row items-center bg-black text-white p-8 gap-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <motion.h3
          className="text-sm text-yellow-500 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {header}
        </motion.h3>

        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <Button variant="secondary">Read More</Button>
      </div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src={imageSrc}
          alt="Restaurant outdoor seating with waiter serving"
          className="rounded-lg"
          width={600}
          height={400}
        />
      </motion.div>
    </article>
  );
};

export default RestaurantArticle;
