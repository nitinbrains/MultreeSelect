> This project is created to use Dropdown Tree select in React. Powered by nitpedia (wwww.nitpedia.in)

## Guide
1. How to Use ? Here we go:
2. let sampleOptions=[
    {
      title: 'region 1',
      value: 1,
      key: 1,
      children: [
        {
          title: 'store 1',
          value: 212,
          key: 212,
        },
      ],
    },
    {
      title: 'region 2',
      value: 2,
      key: 2,
      children: [
        {
          title: 'store 2',
          value: 215,
          key: 215,
        },
        {
          title: 'store 3',
          value: 216,
          key: 216,
        },
        {
          title: 'store 4',
          value: 217,
          key: 217,
        },
      ],
    },
  ]
2.      <MultreeSelect
           options={sampleOptions}
            onChange={this.getVal}
            getChildValue={true}
            placeholder={'select'}
            width={'25%'}
            showSearch={true}
            size={'small'}
            />
3. size accepts either 'small' i.e 30px or 'large' i.e 36px.
4. If getChildValue = {false} then value of parent and child nodes both will be returned. 			
