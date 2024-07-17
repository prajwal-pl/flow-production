import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  tagLine: string;
  image: string;
  company: string;
};

const ProductCard = ({
  id,
  name,
  description,
  price,
  tagLine,
  image,
  company,
}: Props) => {
  return (
    <main>
      <div>
        <Card className="w-[300px] max-h-[800px] h-full hover:bg-muted hover:dark:bg-muted-foreground/5 border border-black/25 dark:border-gray-600">
          <CardHeader className="space-y-3">
            <Image
              src={image}
              alt="product image max-w-full max-h-full"
              className="object-scale-down h-64 w-80 flex items-center justify-center rounded-lg"
              width={300}
              height={300}
            />
            <CardTitle className="text-center">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <p className="text-muted-foreground">{company}</p>
              <h1 className="text-xl">{price}$</h1>
            </div>
            <p className="">{tagLine}</p>
            <Link href={`/products/${id}`}>
              <Button className="w-full mt-3">View More</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProductCard;
