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
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` text COLLATE utf8mb4_unicode_ci,
  `latitude` text COLLATE utf8mb4_unicode_ci,
  `markerNumber` int DEFAULT NULL,
  `imgAddress` text COLLATE utf8mb4_unicode_ci,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES (2,'공룡의 문 매표소','128.39939220501495','35.05999115549877',14,'','','CONV'),(6,'공룡분수','128.3995073529092','35.0593521695448',1,'','','PREVIEW'),(7,'공룡동산','128.39937027565176','35.057742708696864',10,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/fed34af0-4bca-409a-8a49-8de1fa55d7e2?alt=media&token=1728983e-75cd-49cc-b332-ee0362df097c','','PREVIEW'),(10,'크리스피도넛,엔젤리너스커피','128.40018156734257','35.055667154792026',6,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/d440b939-3ec2-4065-ad76-3e17e1b8a3d4?alt=media&token=519c2346-1ae7-41b4-86c2-e451174fa4f0','가격정보 : 이미지 확인 ','CONV'),(11,'공룡빵','128.40048865107258','35.058405761663124',6,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/ee2d148d-25fe-4380-a933-1543de6da06c?alt=media&token=33d1fd8a-943c-44ae-9ece-a612846f77ba','\"가격정보 : 이미지 확인 \"','CONV'),(12,'건너갈 수 있는 다리 ','128.39866558439877','35.057394830623686',16,'','','CONV'),(14,'공룡나라 식물원','128.40084829866728','35.05812446385968',10,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/4d02f544-ec01-4198-8832-a7d91fb03faa?alt=media&token=877e6f2c-c62a-4682-b61b-3f6143c94f9c','주제\n- 공룡시대 식물부터 희귀한 식물까지\n전시\n- 공룡시대 식물: 울레미소나무, 고사리류\n- 희귀수목: 보리수나무, 올리브나무\n- 토우로 마을 모습과 놀이 등을 연출한 고성의 산수경 등','PREVIEW'),(15,'한반도공룡발자국화석관','128.4015803814357','35.05798982644951',8,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/84d4afc6-fe62-42f4-adce-0b1188929956?alt=media&token=03a73579-64ce-43af-8745-277b9dbfb7b3','5D영상관 2층','PREVIEW'),(16,'영상관(3D)','128.4016476322113','35.05711480535918',2,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/4a02a368-1b98-4e74-9793-00ef45fddbe2?alt=media&token=76b1c777-3126-4d82-a818-fa80e09aba6c','주제\n- 7천만년 전 공룡의 세계가 다시 펼쳐진다.\n영상관람안내\n- 상영시간표: 09:10, 09:30 ~ 30분 간격\n- 상영 중간 입장 및 퇴장 불가\n- 유모차 입장 불가','PREVIEW'),(17,'건너갈 수 있는 다리 ','128.39934112374658','35.056837255910324',16,'','','CONV'),(18,'공룡놀이마을','128.4000370055217','35.05666924746563',1,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/03145f00-1f77-4f3d-9a90-778eb4faf849?alt=media&token=a8b2123e-19cb-4b1e-aa42-43b46b4aee9a','','PREVIEW'),(19,'엑스포 주제관','128.40030269604645','35.05553957678803',1,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/5a0d2ba6-9d7d-40cb-b83c-82512a200245?alt=media&token=fedf57dc-fb60-4614-a084-53cd1b40e4be','4D 영상관, 사파리 영상관, 공룡전시관','PREVIEW'),(21,'당항포랜드1(유료)','128.39841707673952','35.05648064082965',3,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/26a84fbe-2c6f-4c30-883f-0c109fd2f9cc?alt=media&token=8a6d81b3-b914-4ec0-9f3f-a9b2010e09db','놀이기구	 소 인	대 인\n바이킹	  4,000	4,500	\n범퍼카	  4,000	4,500	\n우주전투기 4,000	4,500	\n슬라이딩카 4,000	4,500	\n공룡열차	  4,000	4,500	\n아스트로	  4,000	4,500','PREVIEW'),(23,'공룡캐릭터관','128.4005378212347','35.05743406200593',1,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/0c09f4a6-71fa-496a-825a-7f4ebbc19a43?alt=media&token=d0287ef5-282e-4580-8a8a-5a09c23a0010','','PREVIEW'),(26,'체험행사존1(유료)','128.4006713882327','35.05707200654646',15,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/e030f80e-c7ec-4a45-9e00-d913f9a3949f?alt=media&token=9f8da085-8bff-464e-92ca-00cdcfd300ba','페이스 페인팅 - 5.0\n슬리임 만들기 - 5.0 ~ 10.0 \nLED캐릭터 조명 만들기(단체) - 10.0','PREVIEW'),(27,'체험행사존2(유료)','128.3999994014081','35.05703470102589',15,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/9ace2574-8de4-4c64-ad38-8e77b395d776?alt=media&token=61f04e49-e040-4a0d-9c71-5a764f60854f','브라키오사우르스 머그 - 25.0\n티라노사우르스 머그 - 20.0\n하트사우르스 머그/디자인 뿔컵 - 22.0\n공룡 스케치 일자 머그(2종) - 15.0','PREVIEW'),(28,'체험행사존3(유료)','128.40027141022907','35.057558811242',15,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/1216b61a-5c32-4270-919d-46b4f4f430a4?alt=media&token=0fa8f6d3-14ca-46eb-b506-0dba03d62ebf','KID 탁상미러 아트 - 15.0\n우리가족 행복 썬캐처 - 10.0\n블링블링 머리띠 & 썬캡 - 10.0','PREVIEW'),(29,'공룡 화석&체험관','128.40105763186827','35.05642312833793',1,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/bdb751c1-625a-48bd-87af-9d1ee8c1046f?alt=media&token=062d6f9f-b629-4c9b-b5ed-25e447f12280','전시\n- 정글 미디어아트, 공룡 진품화석, 작동공룡, 화석발굴 체험 등','PREVIEW'),(30,'미끄럼틀(114m)','128.39861234239527','35.055719058369924',11,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/c20e29f6-a1ff-4445-a2c2-e9071b56c375?alt=media&token=35bd1321-1cbb-444b-ab3d-ac1a3a2d0c93','','PREVIEW'),(31,'당항포랜드2(유료)','128.39799092233005','35.05559328334287',3,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/d5c7d29e-11c0-4b71-971f-652fbdc17bf4?alt=media&token=79c0e210-d18f-4fe0-be40-a42b2898cf6a','놀이기구	       소 인	         대 인\n유로번지	      7,000	7,000	\n회전그네	      4,500	4,500	\n공룡라이더     3,000	3,000	\n풍선 터뜨리기 4,500	4,500	','PREVIEW'),(32,'공룡발자국 탐방로','128.40139365835824','35.05508084145405',1,'','','PREVIEW'),(33,'공룡발자국보호각','128.40094163972495','35.05476610792623',1,'','','PREVIEW'),(34,'매점, 식당','128.3988635534695','35.058237500013746',7,'','','CONV'),(35,'화장실','128.39884050551237','35.057850214288976',13,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/f9558f70-d331-43c7-9a76-0b7d5ba1d9db?alt=media&token=63bff0be-a70a-4424-bd6e-a275e5c3b61d','화장실입니다.','CONV'),(36,'매점','128.3988068065368','35.05748107703035',7,'','','CONV'),(37,'공룡빵','128.39890760940358','35.05728613861104',6,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/ee2d148d-25fe-4380-a933-1543de6da06c?alt=media&token=33d1fd8a-943c-44ae-9ece-a612846f77ba','\"가격정보 : 이미지 확인 \"','CONV'),(38,'카페','128.400625213213','35.05837939940482',4,'','','CONV'),(39,'화장실','128.40040161806562','35.058765026376896',13,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/e5907071-c50a-419b-957c-03aa23132214?alt=media&token=c0f8ffca-3002-424d-a516-7053163cd989','화장실입니다.','CONV'),(40,'화장실','128.40115200674018','35.05841837877563',13,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/3795edc3-c2ea-4d9c-8733-f1d72ab6d142?alt=media&token=463e0cc9-79b5-4210-a6ff-e4957353be85','화장실입니다.','CONV'),(41,'화장실','128.39854342492947','35.059390327224236',13,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/76a09a3c-b891-4689-924b-78e7a730b09e?alt=media&token=16bbc22d-5339-48d9-9eff-4c71b677873e','화장실입니다.','CONV'),(42,'유모차/휠체어 대여','128.3989335117475','35.05880450114814',12,'','','CONV'),(43,'수유실(기저귀 교환대)','128.39904287006237','35.05878972047065',5,'','','CONV'),(44,'화장실','128.3992015433297','35.05877437077443',13,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/20c22d4b-249f-42e3-9120-78193a97fa82?alt=media&token=5c09ff78-a1e6-464e-9347-b7df9857d816','화장실입니다.','CONV'),(45,'유모차/휠체어 대여','128.4002416286963','35.058863761456884',12,'','','CONV'),(46,'주차장','128.398755201146','35.060399574509475',9,'','','CONV'),(47,'주차장','128.3970589001275','35.05991440820201',9,'','','CONV'),(48,'상설무대','128.40221042896036','35.05813801505421',2,'https://firebasestorage.googleapis.com/v0/b/yrannosaurus-f0b53.appspot.com/o/e6b0e1aa-783b-40e6-9c46-d5df390acf37?alt=media&token=7048934d-e010-48c1-b6aa-bd9233f385ff','','PREVIEW'),(56,'발표 테스','128.3967041738243','35.05855530360464',4,'','트트트트','PREVIEW'),(57,'발표 테스','128.3967041738243','35.05855530360464',4,'','트트트트','CONV');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06  9:10:07
