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
-- Table structure for table `courseorder`
--

DROP TABLE IF EXISTS `courseorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courseorder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `place_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `sequence` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `place_id` (`place_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `courseorder_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`),
  CONSTRAINT `courseorder_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courseorder`
--

LOCK TABLES `courseorder` WRITE;
/*!40000 ALTER TABLE `courseorder` DISABLE KEYS */;
INSERT INTO `courseorder` VALUES (43,2,10,1),(44,6,10,2),(45,7,10,3),(46,19,10,4),(47,33,10,5),(48,32,10,6),(49,18,10,7),(50,29,10,8),(51,16,10,9),(52,23,10,10),(53,14,10,11),(54,15,10,12),(55,48,10,13),(56,6,11,1),(57,7,11,2),(58,27,11,3),(59,18,11,4),(60,26,11,5),(61,29,11,6),(62,16,11,7),(63,23,11,8),(64,48,11,9);
/*!40000 ALTER TABLE `courseorder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06  9:10:08
