利用 *React Hooks* 模拟 Vue 的计算属性

```js
function App () {
	const [fistName, setFirstName] = useState('F')
	const [lastName, setLastName] = useState('L')

	const fullName = useMemo(() => {
		return `${firstName} ${lastName}`
	}, [firstName, lastName])

	return (
		<div>
			{fullName}
		</div>
	)
}
```