-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: j9e102A.p.ssafy.io    Database: dinosaur
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `dinosaurmuseum`
--

DROP TABLE IF EXISTS `dinosaurmuseum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinosaurmuseum` (
  `dinosaur_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `museum_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdqumt5em6vw2bak2du3wlkxsy` (`dinosaur_id`),
  KEY `FKbb7m0uwkdc5lfri3cgnv5qddd` (`museum_id`),
  CONSTRAINT `FKbb7m0uwkdc5lfri3cgnv5qddd` FOREIGN KEY (`museum_id`) REFERENCES `museum` (`id`),
  CONSTRAINT `FKdqumt5em6vw2bak2du3wlkxsy` FOREIGN KEY (`dinosaur_id`) REFERENCES `dinosaur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinosaurmuseum`
--

LOCK TABLES `dinosaurmuseum` WRITE;
/*!40000 ALTER TABLE `dinosaurmuseum` DISABLE KEYS */;
INSERT INTO `dinosaurmuseum` VALUES (1,1,19),(1,2,21),(3,3,1),(3,4,19),(3,5,1),(3,6,20),(3,7,24),(3,8,22),(3,9,21),(3,10,25),(4,11,21),(5,12,3),(5,13,1),(5,14,5),(5,15,19),(5,16,3),(5,17,5),(5,18,4),(5,19,7),(5,20,1),(5,21,20),(5,22,24),(5,23,22),(5,24,21),(5,25,25),(6,26,21),(6,27,20),(6,28,1),(6,29,7),(7,30,2),(7,31,23),(7,32,1),(8,33,21),(8,34,20),(8,35,1),(8,36,7),(8,37,3),(8,38,19),(9,39,21),(11,40,19),(11,41,1),(11,42,21),(12,43,1),(12,44,2),(12,45,3),(12,46,19),(12,47,23),(12,48,5),(12,49,4),(12,50,7),(12,51,20),(12,52,24),(12,53,22),(12,54,21),(12,55,25),(13,56,21),(14,57,21),(15,58,19),(16,59,21),(17,60,20),(17,61,21),(18,62,1),(18,63,20),(19,64,19),(20,65,21),(21,66,21),(21,67,22),(22,68,21),(22,69,4),(23,70,21),(23,71,22),(23,72,3),(24,73,3),(24,74,1),(24,75,21),(25,76,20),(25,77,1),(26,78,1),(27,79,3),(27,80,4),(27,81,1),(27,82,21),(28,83,20),(29,84,21),(29,85,4),(29,86,22),(30,87,21),(31,88,1),(32,89,3),(32,90,4),(32,91,1),(32,92,20),(32,93,24),(32,94,21),(35,95,21),(35,96,24),(36,97,21),(37,98,3),(37,99,1),(37,100,4),(37,101,5),(37,102,19),(37,103,7),(37,104,20),(37,105,24),(37,106,21),(38,107,1),(38,108,4),(38,109,20),(39,110,21),(40,111,7),(40,112,25),(40,113,20),(42,114,21),(43,115,20),(43,116,21),(43,117,1),(44,118,1),(44,119,20),(44,120,5),(44,121,7),(44,122,21),(52,123,1),(55,124,5),(55,125,1),(58,126,19),(60,127,7),(60,128,1),(60,129,25),(61,130,7),(63,131,1),(72,132,19),(74,133,23),(76,134,4),(79,135,19),(79,136,21),(87,137,21),(91,138,21),(92,139,21),(92,140,4),(92,141,1),(96,142,1),(96,143,19),(96,144,20),(96,145,24),(96,146,21),(98,147,3),(98,148,7),(98,149,21);
/*!40000 ALTER TABLE `dinosaurmuseum` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06  9:10:11
