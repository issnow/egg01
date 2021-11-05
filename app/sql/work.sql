USE algorithm_assistant;
CREATE TABLE `feedback` (
`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
`feedback_module` varchar(45) NOT NULL COMMENT '反馈模块',
`feedback_content` longtext NOT NULL COMMENT '反馈内容',
`username` varchar(45) NOT NULL COMMENT '创建人姓名',
`create_by` varchar(45) NOT NULL COMMENT '创建人工号',
`create_time` datetime NOT NULL COMMENT '创建时间',
`update_by` varchar(45) NOT NULL COMMENT '修改人',
`update_time` datetime NOT NULL COMMENT '更新时间',
PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARSET = utf8mb4 COMMENT '立即反馈入口';