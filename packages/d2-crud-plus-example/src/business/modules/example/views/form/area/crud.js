export const crudOptions = {
  columns: [
    {
      title: '级联式选择',
      children: [
        {
          title: '级联式',
          key: 'pca',
          type: 'area-selector',
          form: {
            helper: '级联式，获取到的值为code,点击保存可看到请求的数据中发给服务器的数据为code'
          }
        },
        {
          title: '值为名称',
          key: 'pca2',
          type: 'area-selector',
          dict: { value: 'name' },
          form: {
            helper: '级联式，获取到的值为name'
          }
        }
      ]
    },
    {
      title: '多选',
      key: 'pca3',
      type: 'area-multi-selector',
      dict: { value: 'name' },
      form: {
        component: { span: 24 },
        helper: '级联式多选，精简结果，collapse-tags'
      }
    }, {
      title: '多选',
      key: 'pca4',
      type: 'area-multi-selector',
      dict: { value: 'name' },
      form: {
        component: {
          span: 24,
          props: {
            elProps: { // el-cascade的属性配置
              'collapse-tags': false
            }
          }
        },
        helper: '级联式多选，全部显示'
      }
    },
    {
      title: '树形选择',
      children: [
        {
          title: '树形选择1',
          key: 'pcaTree',
          type: 'area-tree-selector',
          form: {
            component: { span: 24 },
            helper: '树形，忽略完全选中节点的子节点，精简结果'
          }
        }, {
          title: '树形选择2',
          key: 'pcaTree2',
          type: 'area-tree-selector',
          form: {
            component: {
              span: 24,
              props: { ignoreFullCheckedChildren: false, leafOnly: true, includeHalfChecked: false }
            },
            helper: '树形，不忽略完全选中节点的子节点，只需要叶子节点'
          }
        }
      ]
    }

  ]
}
