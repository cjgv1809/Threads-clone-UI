import { faker } from "@faker-js/faker";

const generateRandomFollower = (): User => {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() > 0.5,
    username: faker.internet.userName(),
    bio: faker.person.bio(),
    link: faker.internet.url(),
  };
};

const generateRandomUser = (): User => {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() > 0.5,
    username: faker.internet.userName(),
    bio: faker.person.bio(),
    link: faker.internet.url(),
    followers: Array.from({ length: 10 }, () => generateRandomFollower()),
  };
};

const createRandomReply = (): Reply => {
  const author = generateRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.sentence(),
    likes: Math.floor(Math.random() * 100),
    createdAt: faker.date.recent().toISOString(),
  };
};

const createRandomThread = (): Thread => {
  const author = generateRandomUser();
  const mentionUser = generateRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: Array.from({ length: 10 }, () => createRandomReply()),
    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  };
};

const generateRandomThread = (): Thread[] => {
  return Array.from({ length: 50 }, () => createRandomThread());
};

export {
  generateRandomFollower,
  generateRandomUser,
  generateRandomThread,
  createRandomReply,
  createRandomThread,
};
