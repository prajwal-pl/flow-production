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

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <main>
      <div>
        <Card className="w-[300px] hover:bg-muted hover:dark:bg-muted-foreground/5 border border-black/25 dark:border-gray-600">
          <CardHeader className="space-y-3">
            <Image
              src="/assets/preview.png"
              alt="product image"
              width={300}
              height={300}
            />
            <CardTitle className="text-center">Monitor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Microsoft</p>
            <div className="flex justify-between">
              <h1 className="text-xl">100$</h1>
              <p>4.2/5</p>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              sunt!
            </p>
            <Button className="w-full mt-3">View More</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProductCard;
