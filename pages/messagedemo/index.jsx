import 'vanilla-antd-message/dist/style.css'
import Head from 'next/head'

import styles from './index.module.scss'

import Script from 'next/script'

export default function Demo () {
  return (
    <>
      <Head>
        <title>vanilla-antd-message</title>
      </Head>

      <Script
        id="vanilla-antd-message"
        src="https://unpkg.com/vanilla-antd-message@1.1.0/dist/index.js"
      />
  
      <main className={styles.demo}>
        <div className="btn-box">
          <button className="info-btn" onClick={() => window.Message.default.info('Info Message')}>info</button>
          <button className="info-btn" onClick={() => window.Message.default.info('Info Message Destroy After 1s', 1000)}>info(destroy after 1s)</button>
          <button className="success-btn" onClick={() => window.Message.default.success('Success Message')}>success</button>
          <button className="error-btn" onClick={() => window.Message.default.error('Error Message')}>error</button>
          <button className="warn-btn" onClick={() => window.Message.default.warn('Warn Message')}>warn</button>
        </div>
      </main>
    </>
  )
}