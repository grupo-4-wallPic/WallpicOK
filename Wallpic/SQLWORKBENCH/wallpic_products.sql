-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: wallpic
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `images` varchar(100) NOT NULL,
  `categoryId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'OWL WITH LIGHT BLUE EYES','Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa.\\n\\n Nuestros productos se entregan listos para colgar. Incluyen:\\n\\nLámina impresa en papel fotográfico brillante de alta calidad\\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\\nVidrio y fondo de mdf.\\nAccesorios necesarios para colgar (clavos incluidos)\\n\\nNo esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país.\\n\\n\\n Hecho en Argentina','image-1598191173137.jpg',1),(2,'ELEPHANT ON BLACK','Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa.\\n\\n Nuestros productos se entregan listos para colgar. Incluyen:\\n\\nLámina impresa en papel fotográfico brillante de alta calidad\\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\\nVidrio y fondo de mdf.\\nAccesorios necesarios para colgar (clavos incluidos)\\n\\nNo esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país.\\n\\n\\n Hecho en Argentina','image-1598191609830.jpg',1),(3,'COUPLE OF DEERS','Sumale Diseño a tu hogar con nuestro cuadros pensados para cada rincón de tu casa.\\n\\n Nuestros productos se entregan listos para colgar. Incluyen:\\n\\nLámina impresa en papel fotográfico brillante de alta calidad\\nMarco de madera kiri (uno de los árboles mas sustentables del planeta)pintado en el color que vos elijas. Puede ser natural, blanco o negro.\\nVidrio y fondo de mdf.\\nAccesorios necesarios para colgar (clavos incluidos) No esperes mas de lo que tenés que esperar, en 5 días hábiles lo tenés en tu casa. Consultá por envíos a todo el país. Hecho en Argentina','image-1598191649191.jpg',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-02 10:17:00
