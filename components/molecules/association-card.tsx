import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ACard = ({
  id,
  title,
  description,
  image,
  type,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string[];
}) => (
  <Card>
    <CardHeader>
      <div className="w-full flex justify-center items-center mb-4">
        <img src={image} className="h-20 object-contain" />
      </div>
      <div className="space-x-2">
        {type.map((t) => (
          <Badge key={`badge-type-${t}`} className="bg-[#20580f]">
            {t}
          </Badge>
        ))}
      </div>
      <Link href={`/association/${id}`}>
        <CardTitle>{title}</CardTitle>
      </Link>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default ACard;
