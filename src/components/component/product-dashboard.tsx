import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getOrders } from "@/app/actions/orderAction";
import { auth } from "../../../auth";
import prisma from "@/lib/db";

export async function ProductDashboard() {
  const session = await auth();
  const orders = await prisma.order.findMany();

  const users = await prisma.user.findMany();

  const products = await prisma.product.findMany();
  //   {
  //     id: "INV001",
  //     customer: "John Doe",
  //     date: "2023-06-01",
  //     total: 250.0,
  //     status: "Paid",
  //   },
  //   {
  //     id: "INV002",
  //     customer: "Jane Smith",
  //     date: "2023-06-05",
  //     total: 150.0,
  //     status: "Pending",
  //   },
  //   {
  //     id: "INV003",
  //     customer: "Bob Johnson",
  //     date: "2023-06-10",
  //     total: 350.0,
  //     status: "Unpaid",
  //   },
  //   {
  //     id: "INV004",
  //     customer: "Sarah Lee",
  //     date: "2023-06-15",
  //     total: 450.0,
  //     status: "Paid",
  //   },
  //   {
  //     id: "INV005",
  //     customer: "Tom Wilson",
  //     date: "2023-06-20",
  //     total: 550.0,
  //     status: "Paid",
  //   },
  // ];
  // const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);
  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8 p-6 md:p-8">
      <div className="grid gap-6">
        <Card>
          <CardHeader className="px-6 py-4">
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order #</TableHead>
                  <TableHead>Order Name</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium truncate">
                      {order.id}
                    </TableCell>
                    <TableCell className="truncate">
                      {
                        products.find(
                          (product) => product.id === order.productId
                        )?.name
                      }
                    </TableCell>
                    <TableCell>
                      {users.find((user) => user.id === order.userId)?.name}
                    </TableCell>
                    <TableCell>{order.createdAt.toString()}</TableCell>
                    <TableCell>
                      $
                      {
                        products.find(
                          (product) => product.id === order.productId
                        )?.price
                      }
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "PAID" ? "outline" : "secondary"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader className="px-6 py-4">
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Total Revenue</div>
              <div className="text-2xl font-bold">
                $
                {orders.reduce(
                  (acc, order) =>
                    acc +
                    (products.find((product) => product.id === order.productId)
                      ?.price || 0),
                  0
                )}
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Paid Orders</div>
              <div className="text-lg font-medium">
                {orders.filter((order) => order.status === "PAID").length}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Pending Orders</div>
              <div className="text-lg font-medium">
                {orders.filter((order) => order.status === "PENDING").length}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Unpaid Orders</div>
              <div className="text-lg font-medium">
                {orders.filter((order) => order.status === "UNPAID").length}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
