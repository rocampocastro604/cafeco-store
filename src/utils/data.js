const data = [
  {
    id: 1,
    title: 'Pata e mula',
    process: 'Honey',
    description: 'SWEET, from the aroma to the taste. A coffee to rule them all.',
    price: 15000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225&hash=8B7BCDC2'
  },
  {
    id: 2,
    title: 'The mysterious',
    process: 'Blend',
    description: 'Where it comes from is a mystery and where its taste will take you too.',
    price: 16000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225&hash=500B67FB'
  },
  {
    id: 3,
    title: 'Old donkey',
    process: 'Natural',
    description: 'A coffee that does not taste like coffee',
    price: 25000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225&hash=A89D0DE6'
  },
  {
    id: 4,
    title: 'Sweet trail',
    process: 'Honey',
    description: 'A sweet coffee. Ideal for those who think that coffee should taste bitter.',
    price: 20000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225&hash=225E6693'
  },
  {
    id: 5,
    title: 'Don Carlos',
    process: 'Washed',
    description: 'A coffee made without much mystery.',
    price: 18000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225&hash=9D9539E7'
  },
  {
    id: 6,
    title: 'Tinto de Vivero',
    process: 'Semi-Washed',
    description: 'A very special coffee, perfect for lovers of traditional flavours.',
    price: 15000,
    img: 'https://api.lorem.space/image/drink?w=400&h=225'
  }
]

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data);
    }, 2000)
  })
}