import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/db";
import { auth } from "../../../auth";

export async function UserDashboard() {
  const session = await auth();
  const orders = await prisma.order.findMany({
    where: {
      customer: {
        id: session?.user.id,
      },
    },
  });
  const products = await prisma.product.findMany();
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Latest Orders</CardTitle>
        <CardDescription>
          View the details of your recent orders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order Name</TableHead>
              <TableHead>Order #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Company</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="font-medium">
                    {
                      products.find((product) => product.id === order.productId)
                        ?.name
                    }
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium truncate">{order.id}</div>
                </TableCell>
                <TableCell>{order.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    Fulfilled
                  </Badge>
                </TableCell>
                <TableCell>
                  $
                  {
                    products.find((product) => product.id === order.productId)
                      ?.price
                  }
                </TableCell>
                <TableCell>
                  {
                    products.find((product) => product.id === order.productId)
                      ?.company
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
