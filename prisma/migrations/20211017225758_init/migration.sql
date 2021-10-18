-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `parents` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `avScore` INTEGER NOT NULL,
    `avSpeed` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `speed` VARCHAR(191) NOT NULL,
    `totalQuations` INTEGER NOT NULL DEFAULT 0,
    `expectedSpeed` VARCHAR(191) NOT NULL,
    `concept` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `absent` BOOLEAN NOT NULL DEFAULT false,
    `studentId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
