CREATE TABLE `feedback` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `feedback_module` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '反馈模块',
  `feedback_content` VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '反馈内容',
  `create_by` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '创建人工号',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_by` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '修改人',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin
COMMENT = '立即反馈入口';


-- 更新数据库设置
ALTER TABLE `feedback` 
ADD COLUMN `username` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '创建人姓名' AFTER `feedback_content`,
CHANGE COLUMN `feedback_content` `feedback_content` LONGTEXT CHARACTER SET 'utf8mb4' NOT NULL COMMENT '反馈内容' ;

USE algorithm_assistant;
CREATE TABLE `feedback` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '主键',
  `feedback_module` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '反馈模块',
  `feedback_content` LONGTEXT CHARACTER SET 'utf8mb4' NOT NULL COMMENT '反馈内容',
  `username` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '创建人姓名',
  `create_by` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '创建人工号',
  `create_time` DATETIME NOT NULL COMMENT '创建时间',
  `update_by` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL COMMENT '修改人',
  `update_time` DATETIME NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin
COMMENT = '立即反馈入口';
