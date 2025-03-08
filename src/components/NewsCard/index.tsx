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
import { CalendarIcon, ClockIcon } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  slug: string;
}

export default function NewsCard({
  image,
  title,
  subtitle,
  author,
  date,
  readingTime,
  category,
  excerpt,
  slug,
}: NewsCardProps) {
  return (
    <Link data-name="NewsCard"
      href={`/news/${slug}`}
      className="text-primary   font-medium bg-slate-100 w-full flex justify-center"
    >
      <Card className="overflow-hidden transition-all shadow-none rounded-none border-none">
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
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="text-xl font-bold line-clamp-2 mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {subtitle}
            </p>
          </div>
          <p className="text-sm line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{author.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
