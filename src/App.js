import { useState } from 'react'
import './App.css'
import {
	Form,
	Select,
	InputNumber,
	Switch,
	Radio,
	Slider,
	Button,
	Upload,
	Rate,
	Checkbox,
	Row,
	Col,
	Typography,
	Divider,
	Input,
} from 'antd'
import {
	UploadOutlined,
	InboxOutlined,
	DownOutlined,
	UpOutlined,
} from '@ant-design/icons'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { MyAvatar } from './components'

const { Option } = Select
const { Text } = Typography

const formItemLayout = {
	labelCol: { span: 24 },
	wrapperCol: { span: 14 },
}

const normFile = (e) => {
	console.log('Upload event:', e)
	if (Array.isArray(e)) {
		return e
	}
	return e && e.fileList
}

const data = [
	{
		name: 'job',
		label: 'Wanted Job Title',
		placeholder: 'e.g Teacher',
		tooltip: 'What do you want others to call you?',
	},
	{
		name: 'avatar',
		label: 'Avatar',
	},
	{
		name: 'firstName',
		label: 'First Name',
	},
	{
		name: 'lastName',
		label: 'Last Name',
	},
	{
		name: 'email',
		label: 'Email',
	},
	{
		name: 'phone',
		label: 'Phone',
	},
	{
		name: 'country',
		label: 'Country',
	},
	{
		name: 'city',
		label: 'City',
	},
]

export default function App() {
	const [professionalSummary, setProfessionalSummary] = useState('')
	const [expand, setExpand] = useState(false)

	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Row style={{ height: '100vh' }}>
			<Col style={{ padding: 48 }} span={12}>
				<Row
					style={{
						height: 34,
						width: 744,
						margin: '0 0 2px 0',
						padding: '0 32px 0 32px',
						justifyContent: 'center',
					}}
				>
					<Text style={{ fontSize: 32 }}>Resume</Text>
				</Row>
				<Row
					style={{
						height: 20,
						width: 744,
						justifyContent: 'center',
					}}
				>
					<Text style={{ fontSize: 16 }}>English</Text>
				</Row>

				<Form
					name='validate_other'
					{...formItemLayout}
					onFinish={onFinish}
					initialValues={{
						'input-number': 3,
						'checkbox-group': ['A', 'B'],
						rate: 3.5,
					}}
					required
				>
					<Divider orientation='left'>Personal Details</Divider>
					<Row gutter={24}>
						{data
							.filter((_, index) => {
								const count = expand ? data.length : 6
								return index < count
							})
							.map((element, index) => (
								<Col key={index} span={12}>
									<Form.Item
										name={element.name}
										label={element.label}
										tooltip={
											element.tooltip
												? {
														color: 'blue',
														title: element.tooltip,
												  }
												: false
										}
									>
										{element.name === 'avatar' ? (
											<MyAvatar />
										) : (
											<Input placeholder={element.placeholder} />
										)}
									</Form.Item>
								</Col>
							))}

						<a style={{ fontSize: 12 }} onClick={() => setExpand(!expand)}>
							{expand ? <UpOutlined /> : <DownOutlined />} Edit additional
							details
						</a>
					</Row>
					<Divider orientation='left'>Professional Summary</Divider>
					<Form.Item
						name={'professionalSummary'}
						label={'Include 2-3 clear sentences about your overall experience'}
					>
						<ReactQuill
							theme='snow'
							value={professionalSummary}
							onChange={setProfessionalSummary}
						/>
					</Form.Item>

					<Divider orientation='left'>Employment History</Divider>
					<Divider orientation='left'>Education</Divider>
					<Divider orientation='left'>Websites & Social Links</Divider>
					<Divider orientation='left'>Hobbies</Divider>
					<Divider orientation='left'>References</Divider>
					<Divider orientation='left'>Languages</Divider>
					<Divider orientation='left'>Extra-curricular Activities</Divider>

					<Form.Item label='Plain Text' tooltip='This is a required field'>
						<span className='ant-form-text'>China</span>
					</Form.Item>
					<Form.Item
						name='select'
						label='Select'
						hasFeedback
						rules={[{ required: true, message: 'Please select your country!' }]}
					>
						<Select placeholder='Please select a country'>
							<Option value='china'>China</Option>
							<Option value='usa'>U.S.A</Option>
						</Select>
					</Form.Item>

					<Form.Item
						name='select-multiple'
						label='Select[multiple]'
						rules={[
							{
								required: true,
								message: 'Please select your favourite colors!',
								type: 'array',
							},
						]}
					>
						<Select
							mode='multiple'
							placeholder='Please select favourite colors'
						>
							<Option value='red'>Red</Option>
							<Option value='green'>Green</Option>
							<Option value='blue'>Blue</Option>
						</Select>
					</Form.Item>

					<Form.Item label='InputNumber'>
						<Form.Item name='input-number' noStyle>
							<InputNumber min={1} max={10} />
						</Form.Item>
						<span className='ant-form-text'> machines</span>
					</Form.Item>

					<Form.Item name='switch' label='Switch' valuePropName='checked'>
						<Switch />
					</Form.Item>

					<Form.Item name='slider' label='Slider'>
						<Slider
							marks={{
								0: 'A',
								20: 'B',
								40: 'C',
								60: 'D',
								80: 'E',
								100: 'F',
							}}
						/>
					</Form.Item>

					<Form.Item name='radio-group' label='Radio.Group'>
						<Radio.Group>
							<Radio value='a'>item 1</Radio>
							<Radio value='b'>item 2</Radio>
							<Radio value='c'>item 3</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name='radio-button'
						label='Radio.Button'
						rules={[{ required: true, message: 'Please pick an item!' }]}
					>
						<Radio.Group>
							<Radio.Button value='a'>item 1</Radio.Button>
							<Radio.Button value='b'>item 2</Radio.Button>
							<Radio.Button value='c'>item 3</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item name='checkbox-group' label='Checkbox.Group'>
						<Checkbox.Group>
							<Row>
								<Col span={8}>
									<Checkbox value='A' style={{ lineHeight: '32px' }}>
										A
									</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value='B' style={{ lineHeight: '32px' }} disabled>
										B
									</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value='C' style={{ lineHeight: '32px' }}>
										C
									</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value='D' style={{ lineHeight: '32px' }}>
										D
									</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value='E' style={{ lineHeight: '32px' }}>
										E
									</Checkbox>
								</Col>
								<Col span={8}>
									<Checkbox value='F' style={{ lineHeight: '32px' }}>
										F
									</Checkbox>
								</Col>
							</Row>
						</Checkbox.Group>
					</Form.Item>

					<Form.Item name='rate' label='Rate'>
						<Rate />
					</Form.Item>

					<Form.Item
						name='upload'
						label='Upload'
						valuePropName='fileList'
						getValueFromEvent={normFile}
						extra='longgggggggggggggggggggggggggggggggggg'
					>
						<Upload name='logo' action='/upload.do' listType='picture'>
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
					</Form.Item>

					<Form.Item label='Dragger'>
						<Form.Item
							name='dragger'
							valuePropName='fileList'
							getValueFromEvent={normFile}
							noStyle
						>
							<Upload.Dragger name='files' action='/upload.do'>
								<p className='ant-upload-drag-icon'>
									<InboxOutlined />
								</p>
								<p className='ant-upload-text'>
									Click or drag file to this area to upload
								</p>
								<p className='ant-upload-hint'>
									Support for a single or bulk upload.
								</p>
							</Upload.Dragger>
						</Form.Item>
					</Form.Item>

					<Form.Item wrapperCol={{ span: 12, offset: 6 }}>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Col>
			<Col style={{ backgroundColor: '#7A8599' }} span={12}>
				col-12
			</Col>
		</Row>
	)
}
