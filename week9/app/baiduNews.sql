/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50625
 Source Host           : localhost
 Source Database       : baiduNews

 Target Server Type    : MySQL
 Target Server Version : 50625
 File Encoding         : utf-8

 Date: 02/15/2016 17:02:27 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `imgUrl` varchar(500) DEFAULT NULL,
  `description` text,
  `createTime` datetime NOT NULL,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('1', '新闻一', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3405428483,802057715&fm=116&gp=0.jpg', '这是内容', '2016-02-14 15:45:37', 'bj'), ('2', '北京中心城区污水管线覆盖不到位，再推污水处理三年行动计划', 'http://t10.baidu.com/it/u=http://image.thepaper.cn/image/4/783/948.jpg&fm=36', '2019年本市中心城和行政副中心建成区将率先实现污水处理设施全覆盖，污水基本实现全处理。', '2016-02-14 21:49:57', 'bd'), ('3', '“遇见大咖”李彦宏 看百度创始人的日常', 'http://timg01.baidu-img.cn/timg?tc&size=b679_382&sec=0&quality=100&cut_x=76&cut_y=0&cut_h=0&cut_w=679&di=7b177a9106fa0ab894c9d3a2064422e8&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fy1.ifengimg.com%2Fa%2F2016_08%2F206503c99bbdf0a.jpg%26fm%3D94', '“遇见大咖”李彦宏 看百度创始人的日常', '2016-02-14 21:59:28', 'tp'), ('4', '胡歌霍建华秀恩爱笑容温暖 网友：感觉他俩好搭 ', 'http://t12.baidu.com/it/u=http://img.ycwb.com/news/attachement/jpg/site2/20160214/448a5bb32da0182abcbc06.jpg&fm=36', '2月14日，胡歌霍建华秀恩爱让不少单身流泪满面。胡歌霍建华为杂志拍摄了一组封面照，二人穿着同款风衣，在白雪中端着咖啡，笑容温暖。', '2016-02-14 22:04:04', 'yl'), ('5', '南京动物园猩猩情人节“拜天地”', null, '在人们“过节”的同时，动物也来“凑热闹”。', '2016-02-14 22:04:49', 'sh'), ('6', '科技大事件：特斯拉将推出最实惠电动汽车', 'http://img2.imgtn.bdimg.com/it/u=3188535213,2715102087&fm=11&gp=0.jpg', '特斯拉将于3月31日正式接受其新款电动车型Model 3的预定，Model 3的预定售价大约为...', '2016-02-15 10:34:54', 'bj'), ('7', '小县城的农村电商元年：马云也来取经', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/0924/44/9/69553122/auto.jpg&fm=36', '吕春和负责遂昌电商省外考察团的接待工作，他告诉记者，他已接待来自全国各地考察农村电商的考察团达...', '2016-02-15 10:53:00', 'sh'), ('8', 'AI不仅仅与李世石下围棋 人工智能酝酿商业化', null, '互联网巨头公司不惜资本、资源加大了投入力度，以BAT为首的企业也着手酝酿着AI各个领域的商业化。', '2016-02-15 10:53:43', 'sh'), ('11', '林心如捧花自拍无惧催婚：一个人也好', 'http://t11.baidu.com/it/u=http://www.idaocao.com/daocaoeditor/2014_image/201602/1455514493367405.jpg&fm=36', '照片中的林心如手拿花朵，侧头微笑，红润的面庞加上如花的笑容，宛如少女。', '2016-02-15 04:04:13', 'yl'), ('12', '全明星扣篮赛拉文卫冕', 'http://t11.baidu.com/it/u=http://l.sinaimg.cn/www/dy/slidenews/2_img/2016_06/786_1710914_765228.jpg/original.jpg&fm=38', '2016NBA全明星周末在多伦多如火如荼地进行，在扣篮大赛中，扎克-拉文艰难卫冕，蝉联“扣篮王”。', '2016-02-15 04:05:05', 'yl'), ('13', '现实版《失孤》：父亲骑行数万里寻子', 'http://t10.baidu.com/it/u=http://l.sinaimg.cn/www/dy/slidenews/1_img/2016_06/2841_662070_375177.jpg/original.jpg&fm=38', '他踏上了来青寻子之旅。', '2016-02-15 04:05:54', 'bj'), ('14', '哈尔滨\"天价鱼\"店内明码标价', '', '哈尔滨\"天价鱼\"店内明码标价。哈尔滨\"天价鱼\"店内明码标价。哈尔滨\"天价鱼\"店内明码标价', '2016-02-15 04:06:30', 'sh'), ('15', '“小红帽”街头护卫春运路', '', '各个繁忙路段，人们发现许多“小红帽”正帮助交警维持秩序，他们其实是石门交警大队交警们的子女。', '2016-02-15 04:06:52', 'sh'), ('16', '北京地区春节期间PM2.5较去年同期降16% ', '', '与去年春节期间相比，空气质量总体有较明显的改善，PM2.5平均浓度为98微克/立方米，降幅约为...', '2016-02-15 04:07:17', 'bd'), ('17', '“常回家看看”好判难执行 探望父母多少次算多？ ', 'http://t12.baidu.com/it/u=http://www.chinanews.com/gn/2016/02-15/U242P4T8D7757907F107DT20160215155633.jpg&fm=36', '自《老年人权益保障法》颁布实施以来，因“常回家看看”被写入法律，老年人据此维权的案件数量逐渐增多。', '2016-02-15 04:07:47', 'bd');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
