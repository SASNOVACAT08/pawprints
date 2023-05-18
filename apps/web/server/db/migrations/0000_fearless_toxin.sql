CREATE TABLE `log` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`type` text DEFAULT ('info') NOT NULL,
	`environment` text,
	`content` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_to_project` (
	`user_id` integer NOT NULL,
	`project_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`)
);
