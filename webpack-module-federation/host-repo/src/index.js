(async () => {
  const { default: getPassTime } = await import('remote-repo/getPassTime');
  console.log('host-repo', getPassTime());

  const { default: add } = await import('remote-repo/add');

  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ].forEach(arr => {
    console.log('host-repo', add(...arr));
  })
})()
