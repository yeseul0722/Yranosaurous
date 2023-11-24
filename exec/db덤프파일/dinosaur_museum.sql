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
-- Table structure for table `museum`
--

DROP TABLE IF EXISTS `museum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `museum` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `imgAddress` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museum`
--

LOCK TABLES `museum` WRITE;
/*!40000 ALTER TABLE `museum` DISABLE KEYS */;
INSERT INTO `museum` VALUES (1,'인천광역시 강화군 불은면 강화동로 403','https://smart.science.go.kr/upload_data/subject/link/thum_20131205003642247.JPG','옥토끼우주센터','032-937-6917','http://www.oktokki.com/'),(2,'대전광역시 유성구 대덕대로 481','https://smart.science.go.kr/upload_data/subject/link/thum_20131205004325678.JPG','국립중앙과학관','042-601-7894','http://www.science.go.kr/'),(3,'경기도 과천시 과천동 상하벌로 110','https://smart.science.go.kr/upload_data/subject/link/thum_20131205004957807.JPG','국립과천과학관','02-3677-1500','http://sciencecenter.go.kr/'),(4,'전라남도 목포시 남농로 135 용해동','https://smart.science.go.kr/upload_data/subject/link/thum_20131205010112771.JPG','목포자연사박물관','061-274-3655','http://museum.mokpo.go.kr/'),(5,'충청남도 당진군 신평면 삽교천산길 79','https://smart.science.go.kr/upload_data/subject/link/thum_20131205010331757.jpg','당진해양테마과학관','041-363-9229','http://www.dmto.or.kr/sub3/sub3_3.php'),(6,'제주특별자치도 제주시 삼성로 40','https://smart.science.go.kr/upload_data/subject/link/thum_20131218163808910.jpg','제주특별자치도민속자연사박물관','064-710-7708','http://museum.jeju.go.kr/'),(7,'서울특별시 서대문구 연희동 산5-58','https://smart.science.go.kr/upload_data/subject/link/thum_20131218165001497.jpg','서대문자연사박물관','02-330-8899','http://namu.sdm.go.kr/'),(8,'Computer History Museum, 1401 N. Shoreline Blvd, Mountain View, CA 94043, USA','https://smart.science.go.kr/upload_data/subject/link/thum_20131218205140384.jpg','Computer History Museum (USA)','','http://www.computerhistory.org/'),(9,'National Park Service, 1849 C Street, NW, Washington, DC 20240','https://smart.science.go.kr/upload_data/subject/link/thum_20131218211734172.jpg','미국국립공원관리청(에디슨국립사적지)','','http://www.nps.gov/index.htm'),(10,'The Library of Congress, 101 Independence Ave SE, Washington, DC 20540','https://smart.science.go.kr/upload_data/subject/link/thum_20131218211803010.jpg','The Library of Congress (미국의회도서관)','','http://www.loc.gov/index.html'),(11,'The British Library, 96 Euston Road, London, NW1 2DB','https://smart.science.go.kr/upload_data/subject/link/thum_20131218211853221.jpg','The British Library (영국 국립도서관)','','http://www.bl.uk/'),(12,'GPO Box 666 Melbourne 3001, Victoria, Australia','https://smart.science.go.kr/upload_data/subject/link/thum_20131218211939436.jpg','Museum Victoria (호주 빅토리아박물관)','','http://museumvictoria.com.au/'),(13,'ARSC, 1299 University of Oregon, Eugene, OR 97403-1299, USA','https://smart.science.go.kr/upload_data/subject/link/thum_20131218212109861.jpg','ARSC, Association for Recorded Sound Collections (USA)','','http://www.arsc-audio.org/index.php'),(14,'서울특별시 중구 필동 2가 동국대학교 충무로영상센터','https://smart.science.go.kr/upload_data/subject/link/thum_20131218212224317.jpg','한국음반아카이브연구소','02-2264-6384','http://sparchive.dgu.edu/v2/index.php'),(15,'강원도 강릉시 경포로 393','https://smart.science.go.kr/upload_data/subject/link/thum_20131219104432655.jpg','참소리축음기박물관','032-880-0798','http://www.edison.kr/'),(16,'경기도 수원시 팔달구 행궁로 11','https://smart.science.go.kr/upload_data/subject/link/thum_20131219113417204.JPG','수원문화재단','031-290-3520','http://www.swcf.or.kr/'),(17,'경기도 광주시 중부면 남한산성로 784-16','https://smart.science.go.kr/upload_data/subject/link/thum_20131219113451097.JPG','남한산성문화관광사업단','031-746-2811','http://www.ggnhss.or.kr/'),(18,'서울특별시 중구 덕수궁길 15 별관 1동 5층','https://smart.science.go.kr/upload_data/subject/link/thum_20131219113523220.JPG','서울 한양도성','02-2133-2656','http://seoulcitywall.seoul.go.kr/html/index.html'),(19,'인천광역시 강화군 송해면 장정양오길 437','https://smart.science.go.kr/upload_data/subject/link/thum_20131223135526907.JPG','강화은암자연사박물관','032-934-8872','http://cafe.naver.com/eunammuseum'),(20,'경기도 남양주시 진접읍 금강로 1095','https://smart.science.go.kr/upload_data/subject/link/thum_20131223135731422.JPG','우석헌자연사박물관','031-572-9555','http://www.geomuseum.org/'),(21,'전라남도 해남군 황산면 공룡박물관길 234','https://smart.science.go.kr/upload_data/subject/link/thum_20131223140024282.jpg','해남공룡박물관','061-532-7225','http://uhangridinopia.haenam.go.kr/'),(22,'강원도 태백시 태백로 2249 동점동 295','https://smart.science.go.kr/upload_data/subject/link/thum_20131223173708637.jpg','태백고생대자연사박물관','033-581-8181','http://www.paleozoic.go.kr/'),(23,'서울특별시 종로구 창경궁로 215','https://smart.science.go.kr/upload_data/subject/link/thum_20131223174422662.JPG','국립서울과학관','02-3668-2208','http://www.ssm.go.kr/'),(24,'전라북도 전주시 덕진구 송천동1가 234-5','https://smart.science.go.kr/upload_data/subject/link/thum_20131224112540666.JPG','전라북도어린이회관','063-290-6688','http://child.jeonbuk.go.kr/'),(25,'충청남도 홍성군 서부면 남당항로 934-14','https://smart.science.go.kr/upload_data/subject/link/thum_20131224131430199.jpg','홍성조류탐사과학관','041-630-9696','http://blog.naver.com/birdcenter'),(26,'경상북도 경주시 하동공예촌길 33','https://smart.science.go.kr/upload_data/subject/link/thum_20131224161327960.JPG','신라역사과학관','054-745-4998','http://www.sasm.or.kr/'),(27,'경상북도 포항시 남구 효자동 산31','https://smart.science.go.kr/upload_data/subject/link/thum_20131224171029783.JPG','로보라이프뮤지엄','054-279-0427','http://www.robolife.kr'),(28,'경기도 부천시 원미구 평천로 655','https://smart.science.go.kr/upload_data/subject/link/thum_20131224171606197.JPG','부천로보파크','070-7094-5479','http://www.robopark.org/'),(29,'경상남도 창원시 의창구 충혼로72번길 16','https://smart.science.go.kr/upload_data/subject/link/thum_20131224172917431.JPG','창원과학체험관','055-267-2676','http://www.cwsc.co.kr/');
/*!40000 ALTER TABLE `museum` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06  9:10:53
