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
-- Table structure for table `festival`
--

DROP TABLE IF EXISTS `festival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `festival` (
  `id` int NOT NULL AUTO_INCREMENT,
  `place_id` int DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `place_id` (`place_id`),
  CONSTRAINT `festival_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `festival`
--

LOCK TABLES `festival` WRITE;
/*!40000 ALTER TABLE `festival` DISABLE KEYS */;
INSERT INTO `festival` VALUES (19,14,'공룡나라 식물원','2023-09-30 10:00:00'),(20,15,'공룡발자국','2023-09-30 10:30:00'),(21,16,'영상시청','2023-09-30 11:00:00'),(23,19,'엑스포 주제','2023-09-30 12:00:00'),(24,21,'당항포','2023-09-30 12:30:00'),(27,6,'퍼레이드','2023-10-02 11:00:00'),(29,18,'버스킹공연(버블)','2023-10-02 13:00:00'),(30,6,'퍼레이드','2023-10-02 14:00:00'),(32,18,'버스킹공연(버블)','2023-10-02 16:00:00'),(34,6,'퍼레이드','2023-10-02 19:30:00'),(36,48,'서커스','2023-10-03 12:00:00'),(37,6,'퍼레이드','2023-10-03 11:00:00'),(39,18,'버스킹공연(버블)','2023-10-03 13:00:00'),(40,6,'퍼레이드','2023-10-03 14:00:00'),(41,48,'서커스','2023-10-03 15:00:00'),(42,18,'버스킹공연(버블)','2023-10-03 16:00:00'),(43,48,'장구, 국악 공연','2023-10-03 17:00:00'),(44,6,'퍼레이드','2023-10-03 19:30:00'),(45,48,'싸이버거 공연','2023-10-03 20:00:00'),(49,48,'서커스','2023-10-05 12:00:00'),(50,6,'퍼레이드','2023-10-05 11:00:00'),(51,48,'주제공연','2023-10-05 12:30:00'),(52,18,'버스킹공연(버블)','2023-10-05 13:00:00'),(53,6,'퍼레이드','2023-10-05 14:00:00'),(54,48,'서커스','2023-10-05 15:00:00'),(55,18,'버스킹공연(버블)','2023-10-05 16:00:00'),(56,48,'장구, 국악 공연','2023-10-05 17:00:00'),(57,6,'퍼레이드','2023-10-05 19:30:00'),(58,48,'싸이버거 공연','2023-10-05 20:00:00'),(59,48,'서커스','2023-10-06 12:00:00'),(60,6,'퍼레이드','2023-10-06 11:00:00'),(61,48,'주제공연','2023-10-06 12:30:00'),(62,18,'버스킹공연(버블)','2023-10-06 13:00:00'),(63,6,'퍼레이드','2023-10-06 14:00:00'),(64,48,'서커스','2023-10-06 15:00:00'),(65,18,'버스킹공연(버블)','2023-10-06 16:00:00'),(66,48,'장구, 국악 공연','2023-10-06 17:00:00'),(67,6,'퍼레이드','2023-10-06 19:30:00'),(68,48,'싸이버거 공연','2023-10-06 20:00:00');
/*!40000 ALTER TABLE `festival` ENABLE KEYS */;
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
