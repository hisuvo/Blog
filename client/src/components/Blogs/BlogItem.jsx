import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const BlogItem = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <img src={"https://i.ibb.co/W0zmWBC/zoonPic.jpg"} width={"full"} />
        <Badge variant="outline">{item.category}</Badge>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
      <CardFooter>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
