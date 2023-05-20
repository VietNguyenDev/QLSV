-- Tạo bảng "department"
CREATE TABLE qlsv.department (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

-- Tạo bảng "class"
CREATE TABLE qlsv.class (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  idDepartment INT,
  FOREIGN KEY (idDepartment) REFERENCES qlsv.department(id)
);

-- Tạo bảng "users"
CREATE TABLE qlsv.users (
  id INT PRIMARY KEY,
  password VARCHAR(255),
  fullName VARCHAR(255),
  role VARCHAR(255),
  dateOfBirth DATE,
  idClass INT,
  idDepartment INT,
  created_at TIMESTAMP,
  FOREIGN KEY (idDepartment) REFERENCES qlsv.department(id),
  FOREIGN KEY (idClass) REFERENCES qlsv.class(id)
);

-- Tạo bảng "semester"
CREATE TABLE qlsv.semester (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

-- Tạo bảng "subject"
CREATE TABLE qlsv.subject (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  timeOfLesson INT,
  idTeacher INT,
  idSemester INT,
  FOREIGN KEY (idTeacher) REFERENCES qlsv.users(id),
  FOREIGN KEY (idSemester) REFERENCES qlsv.semester(id)
);

-- Tạo bảng "score"
CREATE TABLE qlsv.score (
  idStudent INT,
  diemCC INT,
  diemGK INT,
  diemThi INT,
  diemTB INT,
  idSemester INT,
  idSubject INT,
  FOREIGN KEY (idStudent) REFERENCES qlsv.users(id),
  FOREIGN KEY (idSemester) REFERENCES qlsv.semester(id),
  FOREIGN KEY (idSubject) REFERENCES qlsv.subject(id)
);
