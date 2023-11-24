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
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` float DEFAULT '0',
  `ratingCnt` int DEFAULT '0',
  `child` tinyint(1) DEFAULT NULL,
  `imgAddress` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'경남 고성 아네뜨','모텔','경상남도 고성군 고성읍 남해안대로 2205',5,1,0,'https://yaimg.yanolja.com/v5/2023/07/18/10/640/64b668ba62eb58.71238690.jpg'),(2,'고성 위드세븐(WITH 7)','모텔','경상남도 고성군 동해면 조선특구로 2128-33',4.7,243,0,'https://yaimg.yanolja.com/v5/2019/12/10/14/640/5def311b965677.61939529.jpg'),(3,'고성 명품무인호텔 시그니처','모텔','경상남도 고성군 고성읍 송학고분로 21-29',5,170,0,'https://yaimg.yanolja.com/v5/2020/08/06/10/640/5f2b5d542b18e5.75616501.jpg'),(4,'고성 스카이 무인텔','모텔','경상남도 고성군 고성읍 신월3길 160',4.8,58,0,'https://yaimg.yanolja.com/v5/2022/10/21/18/640/6352e35cecf8d9.02446960.jpg'),(5,'경남 고성오션스파 호텔','호텔 · 일반호텔','경상남도 고성군 고성읍 신월로 60',4.6,116,1,'https://yaimg.yanolja.com/v5/2022/09/05/16/640/63162030db0a69.10761826.JPG'),(6,'고성 보보','모텔','경상남도 고성군 마암면 삼락6길 90',4.3,261,0,'https://yaimg.yanolja.com/v5/2019/07/04/10/640/5d1d53f2a54ee0.09617341.jpg'),(7,'고성 블루비치펜션&글램핑','펜션','경상남도 고성군 삼산면 두포5길 113-109',4.2,30,1,'https://yaimg.yanolja.com/v5/2023/08/12/10/640/64d75c6a393015.41097053.jpg'),(8,'고성 ON (경남)','모텔','경상남도 고성군 고성읍 동외로151번길 24',4.5,200,0,'https://yaimg.yanolja.com/resize/place/v4/2017/08/18/21/640/5996df3358da10.56841768.JPG'),(9,'고성 오호락풀빌라펜션','펜션','경상남도 고성군 동해면 동해로 1016-14',4.9,115,1,'https://yaimg.yanolja.com/v5/2023/06/29/14/640/649d91e1589663.07843090.jpg'),(10,'고성 ZAZA','모텔','경상남도 고성군 고성읍 남포로162번길 100-21',4.6,177,0,'https://yaimg.yanolja.com/v5/2021/04/27/18/640/608854c3059d81.77652069.jpg'),(11,'고성 구름위의산책펜션','펜션','경상남도 고성군 상리면 삼상로 1312-35',4.7,70,1,'https://yaimg.yanolja.com/v5/2022/05/04/13/640/62727c9ac69e65.11154045.jpg'),(12,'고성 한산 마리나 호텔&리조트','호텔 · 프리미엄 리조트','경상남도 고성군 회화면 회진로 517',4.7,70,1,'https://yaimg.yanolja.com/v5/2022/09/14/21/640/6322421e7d0ed6.05647069.jpg'),(13,'고성 더 로얄 무인텔','모텔','경상남도 고성군 회화면 남해안대로 4146-10',4.3,33,0,'https://yaimg.yanolja.com/v5/2022/12/15/11/640/639b01616a9b14.91519199.jpg'),(14,'고성 우등','모텔','경상남도 고성군 고성읍 동외로151번길 20',4.7,229,0,'https://yaimg.yanolja.com/v5/2023/07/06/16/640/64a6ebb1406663.63974880.jpg'),(15,'고성 비비파크 펜션','펜션','경상남도 고성군 고성읍 신월2길 92-4',4.7,0,1,'https://yaimg.yanolja.com/v5/2023/09/08/05/640/64faade43ce065.29909542.jpg'),(16,'고성 궁전','모텔','경상남도 고성군 고성읍 공단로 21-9',4.4,46,0,'https://yaimg.yanolja.com/v5/2023/05/02/17/640/645148bc806985.37249247.jpg'),(17,'경남 고성 아네뜨','모텔','경상남도 고성군 고성읍 남해안대로 2205',5,1,0,'https://yaimg.yanolja.com/v5/2023/07/18/10/640/64b668ba62eb58.71238690.jpg'),(18,'고성 1379스테이펜션','펜션','경상남도 고성군 동해면 외산로 487-4(외산리)1379펜션',3,26,1,'https://yaimg.yanolja.com/v5/2023/08/31/13/640/64f09047a23056.42249763.jpg'),(19,'고성 프린스호텔펜션','펜션','경상남도 고성군 고성읍 남해안대로 2463-7',4.4,44,1,'https://yaimg.yanolja.com/v5/2023/09/04/16/640/64f60054c1f853.99489958.jpg'),(20,'고성 호텔프린스','모텔','경상남도 고성군 고성읍 남해안대로 2463-21',3.4,44,0,'https://yaimg.yanolja.com/resize/place/v4/2017/08/24/21/640/599ec6d19dcac9.55653780.jpg'),(21,'고성 VOVTEL(보브텔)','모텔','경상남도 고성군 고성읍 동외로 141',4.5,67,0,'https://yaimg.yanolja.com/v5/2023/05/04/17/640/6453f1256710f0.51647397.jpg'),(22,'고성 아미가','모텔','경상남도 고성군 고성읍 성내로 159',5,3,0,'https://yaimg.yanolja.com/v5/2023/07/24/13/640/64be7e3d816cf5.89016067.jpg'),(23,'고성 블루웨일글램핑','펜션','경상남도 고성군 삼산면 두포5길 113-139',3.5,17,1,'https://yaimg.yanolja.com/v5/2023/08/14/10/640/64da02f973ac59.35144979.jpg'),(24,'고성 드래곤스파빌리지','모텔','경상남도 고성군 회화면 회진로 218',5,22,0,'https://yaimg.yanolja.com/v5/2023/07/14/16/640/64b1742f19cda8.13573359.jpg'),(25,'고성 오션포레글램핑펜션','펜션','경상남도 고성군 회화면 회진로 321',4.1,31,1,'https://yaimg.yanolja.com/v5/2023/05/17/11/640/6464bd18f25e86.34131695.jpg'),(26,'고성 신흥','모텔','경상남도 고성군 고성읍 중앙로 32-7',4.4,10,0,'https://yaimg.yanolja.com/v5/2022/10/24/14/640/6356a4fb4856e7.23182562.jpg'),(27,'고성 행울스테이','펜션','경상남도 고성군 하이면 덕명4길 39-41',4.4,0,1,'https://yaimg.yanolja.com/v5/2023/07/19/09/640/64b7a97ca68246.22926057.jpg'),(28,'고성 43싸이','모텔','경상남도 고성군 고성읍 중앙로43번길 8-1',4.5,5,0,'https://yaimg.yanolja.com/v5/2023/03/07/18/640/64077ef77dbdc1.31728989.jpg'),(29,'고성 폴라리스 글램핑','펜션','경상남도 고성군 동해면 조선특구로 2126',2.9,8,1,'https://yaimg.yanolja.com/v5/2023/08/28/16/640/64eccfe48e5320.05428748.jpg'),(30,'고성 최필간고택한옥펜션','펜션','경상남도 고성군 하일면 학동돌담길 55',3,13,1,'https://yaimg.yanolja.com/v5/2020/07/22/15/640/5f17dbb42cd8e6.58642974.JPG'),(31,'고성 오아시스','모텔','경상남도 고성군 마암면 두호1길 63',3.9,8,0,'https://yaimg.yanolja.com/v5/2023/02/01/13/640/63da64f49542b5.45200301.jpg'),(32,'고성 한산마리나리조트','펜션','경상남도 고성군 회화면 회진로 515',3.9,0,1,'https://yaimg.yanolja.com/v5/2023/09/11/12/640/64ff08823be727.07176602.jpg'),(33,'고성 지중해캠프하우스펜션','펜션','경상남도 고성군 동해면 외산로 486',3.2,20,1,'https://yaimg.yanolja.com/v5/2020/06/22/09/640/5eeffa376187d3.46613979.jpg'),(34,'고성 봄 무인텔','모텔','경상남도 고성군 고성읍 월평1길 81-3',3.2,5,0,'https://yaimg.yanolja.com/v5/2022/10/18/11/640/634e91acedf5b0.71755617.jpg'),(35,'고성 다이노캠핑장','펜션','경상남도 고성군 삼산면 두포5길 193',4,1,1,'https://yaimg.yanolja.com/v5/2023/08/11/14/640/64d641158287a7.76699565.jpg'),(36,'고성 산들바다카라반펜션','펜션','경상남도 고성군 동해면 외산로 330',5,36,1,'https://yaimg.yanolja.com/v5/2023/06/30/17/640/649f0ff155c5b6.80688833.jpg'),(37,'고성 에세이더레지던스펜션','펜션','경상남도 고성군 동해면 내산2길 96-58',5,5,1,'https://yaimg.yanolja.com/v5/2023/04/23/00/640/64447981d27f05.58467240.jpg'),(38,'경남고성 최필간 명품고택','게스트하우스','경상남도 고성군 하일면 학동돌담길 55',2.7,5,1,'https://yaimg.yanolja.com/v5/2021/04/05/16/640/606b38c104a383.61730745.jpg'),(39,'고성 패밀리펜션','펜션','경상남도 고성군 하이면 자란만로 849-6',4,17,1,'https://yaimg.yanolja.com/v5/2019/08/13/15/640/5d525fb88a2d33.39758711.jpg'),(40,'고성 오늘 무인텔 (경남)','모텔','경상남도 고성군 영오면 오서1길 81',4,27,0,'https://yaimg.yanolja.com/v5/2019/08/29/19/640/5d67afac475fb6.67824779.jpg'),(41,'고성 장자골펜션','펜션','경상남도 고성군 상리면 고봉3길 276-16',4.2,14,1,'https://yaimg.yanolja.com/v5/2021/11/10/14/640/618bd55441f070.80713395.jpg'),(42,'고성 월든','모텔','경상남도 고성군 고성읍 성내로 131',3.7,13,0,'https://yaimg.yanolja.com/resize/place/v4/2017/08/21/08/640/599a18b2530378.82382790.jpg'),(43,'고성 햇살가득펜션','펜션','경상남도 고성군 하이면 자란만로 767-19',3.7,22,1,'https://yaimg.yanolja.com/resize/place/v4/2017/08/23/13/640/599d032bd12480.22510736.jpg'),(44,'고성 루나키즈풀빌라','펜션','경상남도 고성군 동해면 장기1길 13',5,3,1,'https://yaimg.yanolja.com/v5/2023/06/21/15/640/6493180b745546.74240606.jpg'),(45,'고성 로미오와줄리엣','모텔','경상남도 고성군 회화면 마구들1길 159',5,5,0,'https://yaimg.yanolja.com/v5/2022/11/03/18/640/63640a11d97218.11982850.jpg'),(46,'고성 헤라','모텔','경상남도 고성군 회화면 구만로 1334',5,0,0,'https://yaimg.yanolja.com/v5/2022/07/14/13/640/62d01a23c86666.29543733.jpg'),(47,'고성 동성펜션','펜션','경상남도 고성군 동해면 조선특구로 2157',2,7,1,'https://yaimg.yanolja.com/v5/2020/07/01/09/640/5efbdab7719a05.65901130.jpg'),(48,'고성 에쿠스','모텔','경상남도 고성군 개천면 옥천로 1019',2,1,0,'https://yaimg.yanolja.com/v5/2019/08/22/19/640/5d5e746270b1d8.37798255.jpg'),(49,'고성 이브','모텔','경상남도 고성군 회화면 배둔로 60',1,4,0,'https://yaimg.yanolja.com/v5/2022/06/03/14/640/629a145a9602a0.21888605.jpg'),(50,'고성 뉴패밀리펜션','펜션','경상남도 고성군 하이면 자란만로 849-8',1,0,1,'https://yaimg.yanolja.com/v5/2023/08/08/23/640/64d2d4b2708e71.61193345.jpg'),(51,'고성 공룡','모텔','경상남도 고성군 거류면 거류로 142',1,5,0,'https://yaimg.yanolja.com/v5/2021/09/08/17/640/6138ed6cb52706.54493304.jpg'),(52,'고성 와와텔','모텔','경상남도 고성군 상리면 상정대로 1885-14',1,39,0,'https://yaimg.yanolja.com/resize/place/v4/2017/08/20/18/640/599955ef4ab165.34898324.jpg'),(53,'고성 시찬스 게스트하우스','게스트하우스','경상남도 고성군 삼산면 두포1길 166-5',1,0,1,'https://yaimg.yanolja.com/v5/2019/04/03/15/640/5ca45951f05bc7.61534210.jpg');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06  9:10:12
