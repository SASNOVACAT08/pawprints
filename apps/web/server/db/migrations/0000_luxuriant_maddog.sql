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
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`authorized_user` integer,
	FOREIGN KEY (`authorized_user`) REFERENCES `user`(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`github_id` integer NOT NULL
);
