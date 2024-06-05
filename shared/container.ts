import "reflect-metadata";
import { container } from "tsyringe";
import { NewsService } from "../services/newsService";
import { VideosService } from "../services/videosService";
import { GaleriaService } from "../services/galeriaService";

// arquivo responsavel por registrar as interfaces e as classes que estao implementando as interfaces
container.register(
  "INewsService", {
    useClass: NewsService
  },
);

container.register(
  "IVideosService", {
    useClass: VideosService
  },
);

container.register(
  "IGaleriaService", {
  useClass: GaleriaService
  },
);