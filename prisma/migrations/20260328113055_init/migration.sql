BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Announcement] (
    [id] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [body] NVARCHAR(max) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Announcement_status_df] DEFAULT 'DRAFT',
    [publishAt] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Announcement_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Announcement_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PrayerRequest] (
    [id] NVARCHAR(1000) NOT NULL,
    [fullName] NVARCHAR(1000),
    [email] NVARCHAR(1000),
    [phoneNumber] NVARCHAR(1000),
    [request] NVARCHAR(max) NOT NULL,
    [category] NVARCHAR(1000) NOT NULL CONSTRAINT [PrayerRequest_category_df] DEFAULT 'GENERAL',
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [PrayerRequest_status_df] DEFAULT 'PENDING',
    [isConfidential] BIT NOT NULL CONSTRAINT [PrayerRequest_isConfidential_df] DEFAULT 0,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PrayerRequest_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PrayerRequest_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ServiceType] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [ServiceType_isActive_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [ServiceType_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [ServiceType_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [ServiceType_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[AttendanceRecord] (
    [id] NVARCHAR(1000) NOT NULL,
    [serviceTypeId] NVARCHAR(1000) NOT NULL,
    [serviceDate] DATETIME2 NOT NULL,
    [attendeeCount] INT NOT NULL,
    [notes] NVARCHAR(max),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [AttendanceRecord_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [AttendanceRecord_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [AttendanceRecord_serviceTypeId_serviceDate_idx] ON [dbo].[AttendanceRecord]([serviceTypeId], [serviceDate]);

-- AddForeignKey
ALTER TABLE [dbo].[AttendanceRecord] ADD CONSTRAINT [AttendanceRecord_serviceTypeId_fkey] FOREIGN KEY ([serviceTypeId]) REFERENCES [dbo].[ServiceType]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
