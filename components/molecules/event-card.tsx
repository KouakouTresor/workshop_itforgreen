import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ECard = ({
  title,
  association,
  description,
  image,
  needs,
  date,
}: {
  title: string;
  association: string;
  description: string;
  image: string;
  needs: string[];
  date: string;
}) => (
  <Card>
    <CardHeader>
      <div className="w-full flex justify-center items-center mb-4">
        <img src={image} className="h-20 object-contain" />
      </div>
      <div className="space-x-2">
        {needs.map((n) => (
          <Badge key={`badge-type-${n}`} className="bg-[#20580f]">
            {n}
          </Badge>
        ))}
      </div>
      <CardTitle>{title}</CardTitle>
      <p className="text-xs text-muted-foreground">{association}</p>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Badge variant="secondary">
        {format(new Date(date), "dd MMMM yyyy à HH:mm", { locale: fr })}
      </Badge>
    </CardContent>
  </Card>
);

export default ECard;
