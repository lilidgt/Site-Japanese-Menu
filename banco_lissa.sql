-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (x86_64)
--
-- Host: 127.0.0.1    Database: japanese_foods
-- ------------------------------------------------------
-- Server version	9.6.0

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'b161e044-1e3e-11f1-a5f0-35a084b4f8bf:1-34';

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dishes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `is_available` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES (1,'Tonkotsu Ramen','Main Course',52.90,'Rich pork bone broth served with thin noodles, chashu pork belly, soft boiled egg, and scallions.',1),(2,'Salmon Nigiri','Sushi',32.50,'Four pieces of premium, melt-in-your-mouth raw salmon served over vinegared sushi rice.',1),(3,'Spicy Tuna Roll','Sushi',45.00,'Inside-out roll filled with fresh minced tuna mixed with spicy mayo, topped with sesame seeds.',1),(4,'Chicken Karaage','Appetizer',28.90,'Japanese-style fried chicken bites, marinated in soy sauce and ginger, served with a lemon wedge and spicy mayo.',1),(5,'Vegetable Tempura','Appetizer',35.00,'Assorted seasonal vegetables lightly battered and deep-fried to crispy perfection. Served with tentsuyu dipping sauce.',1),(6,'Pork Katsudon','Main Course',48.00,'Breaded deep-fried pork cutlet and eggs simmered in a sweet soy broth, served steaming hot over a bowl of rice.',1);
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-08 23:19:21
