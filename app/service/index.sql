CREATE TABLE `book`.`feedback` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `feedbackModule` VARCHAR(45) NULL,
  `feedbackContent` VARCHAR(45) NULL,
  `createBy` VARCHAR(45) NULL,
  `createTime` VARCHAR(45) NULL,
  `updateBy` VARCHAR(45) NULL,
  `updateTime` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
COMMENT = '	';