const user = { email: 'jdoe@gmail.com' };

// try~catch: handle error without stopping the script
try {
  //   myFunc();

  // custom error
  if (!user.name) {
    throw 'User has no name';
  }
} catch (e) {
  console.log(e);
  //   console.log(e.message);
  //   console.log(e.name);
  //   console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
