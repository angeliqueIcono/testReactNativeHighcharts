import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
                series: [{
                    data: [1, 2, 3]
                }]
            }
        };
    }

    render() {
        return (
            <ScrollView>
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />

                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 300
        // flex: 1
    }
});
