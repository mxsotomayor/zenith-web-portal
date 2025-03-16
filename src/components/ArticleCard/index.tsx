import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import { ArticleCardProps } from "./types";

export default function ArticleCard({
  image,
  title,
  author,
  date, 
  category,
  excerpt,
  slug,
}: ArticleCardProps) {
  return (
    <Link
      href={slug}
      className="text-primary  font-medium bg-slate-100 w-full flex justify-center"
    >
      <Card className="overflow-hidden transition-all shadow-none rounded-none border-none flex-1  flex flex-col">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-all hover:scale-105"
            />
            <Badge className="absolute top-2 left-2 z-10 rounded-none">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4 mb-auto  flex-1">
          <div>
            <h3 className="text-xl font-bold line-clamp-2 mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </div> 
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col gap-4 ">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            {author && (
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{date}</span>
              </div> 
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
