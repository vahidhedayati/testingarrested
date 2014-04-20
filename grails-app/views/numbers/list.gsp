
<div data-ng-controller="NumbersCtrl" data-ng-init="getAllNumbers()">
    <h1>Numbers List</h1>
    <div data-ng-show="errors.showErrors" class="red">
        <p data-ng-show="errors.showServerError">"Can not connect to the server, try later"</p>
    </div>
    <div>
        <div>
            <p></p>
            <a class="btn btn-primary btn-primary" data-ng-click="newNumbers()"><span class="glyphicon glyphicon-plus"></span> New numbers</a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    

                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            
                            <th data-sortable="firstNumber">First Number</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr data-ng-repeat="instance in numberss" data-ng-click="editNumbers(instance)">
                            
                            <td>{{instance.firstNumber}}</td>
                            
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>